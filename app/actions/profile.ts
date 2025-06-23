'use server'

import { prisma } from '@/lib/prisma'
import { getUserFromToken } from '@/lib/session'

export async function getProfile() {
  const userId = await getUserFromToken()
  if (!userId) throw new Error('Utente non autenticato')

  const user = await prisma.user.findUnique({
    where: { id: Number(userId) },  // <-- converti string a number qui
    select: {
      id: true,
      name: true,
      surname: true,
      email: true,
      address: true,
      phone: true,
      createdAt: true,
    },
  })

  if (!user) throw new Error('Utente non trovato')
  return user
}
