import Industries from '@/components/Industries'

export const metadata = {
  title: 'Industries – Hitayu',
  description: 'Industries Page',
}

export default async function IndustriesPage() {
  return (
    <>
    <section className="ht-cbanner">
        <div className="ht-container">
          <h1 className="ht-cbanner-title">Industries</h1>
        </div>
      </section>

      <Industries />
    </>
  )
}