import Layout from "../components/layout"
import Link from 'next/link';

export default function Page() {
  return (
    <Layout>
      <h1> Visit the app! </h1>
      <Link href="http://localhost:3000" lassName="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Visit NFTool! 
      </Link>
    </Layout>
  )
}
