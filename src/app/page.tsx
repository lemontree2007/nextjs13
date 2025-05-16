'use client'
import Link from "next/link"
import AppTable from '@/app/components/app.table'
import useSWR from "swr"
export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  if (!data) {
    return <div>Loading...</div>
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ul>
          <li><Link href={"/facebook"}>Facebook</Link></li>
          <li><Link href={"/youtube"}>Youtube</Link></li>
          <li><Link href={"/tiktok"}>Tiktok</Link></li>
        </ul>
        <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
      </div>
    </main>
  )
}
