type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug: category } = await params;

  return (
    <>
      <h1>Category Page</h1>
      <p>Category: {category}</p>
    </>
  );
}
