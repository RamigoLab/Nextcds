import { getProfile } from '@/app/actions/profile'
import { redirect } from 'next/navigation'

export default async function ProfilePage() {
  try {
    const user = await getProfile()

    return (
      <div className="max-w-3xl mx-auto px-4 py-12 pt-16"> {/* aggiunto pt-16 */}
        <h1 className="text-3xl font-bold mb-6 text-zinc-800 dark:text-zinc-100">Profilo Utente</h1>

        <div className="bg-white dark:bg-zinc-900 border border-border dark:border-zinc-700 rounded-xl p-6 shadow">
          <p className="text-lg font-semibold">
            {user.name} {user.surname}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{user.email}</p>
          <div className="mt-4 space-y-2 text-sm">
            <p><strong>Indirizzo:</strong> {user.address}</p>
            <p><strong>Telefono:</strong> {user.phone || 'Non specificato'}</p>
            <p><strong>Registrato il:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    redirect('/auth?redirect=/profile')
  }
}
