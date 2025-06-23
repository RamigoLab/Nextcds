'use server';

import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { createSession } from '@/lib/session';
import { deleteSession } from '@/lib/session';

export async function logout() {
  await deleteSession();
  // Qui redirect lato client, quindi non lo fai qui o puoi mantenere redirect se usi Server Component per logout
}

export async function register(formData: FormData) {
  const name = formData.get('name')?.toString();
  const surname = formData.get('surname')?.toString();
  const address = formData.get('address')?.toString();
  const phone = formData.get('phone')?.toString() || null;
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  if (!name || !surname || !address || !email || !password) {
    throw new Error('Tutti i campi obbligatori devono essere compilati');
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error('Email già registrata');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      surname,
      address,
      phone,
      email,
      password: hashedPassword,
    },
  });

  await createSession(user.id.toString());

  // NON redirect qui!
  return { success: true };
}

export async function login(formData: FormData) {
  const identifier = formData.get('email')?.toString(); // può essere email o nome
  const password = formData.get('password')?.toString();

  if (!identifier || !password) {
    throw new Error('Credenziali mancanti');
  }

  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { email: identifier },
        { name: identifier }
      ],
    },
  });

  if (!user) {
    throw new Error('Utente non trovato');
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error('Password non valida');
  }

  await createSession(user.id.toString());

  return { success: true };
}
