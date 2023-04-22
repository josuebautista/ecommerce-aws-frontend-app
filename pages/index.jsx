import Feature from "@/components/Feature"
import Header from "@/components/Header"
import { Product } from "@/models/Product"
import { mongooseConnect } from "@/lib/mongoose"
import NewProducts from "@/components/NewProducts"
const Home = ({ featuredProduct, newProducts }) => {
  
  return (
    <main className='w-screen h-screen'>
      <Header />
      {featuredProduct && (
        <Feature product={featuredProduct} />
      )}
      {newProducts && (
        <NewProducts products={newProducts} />
      )}
    </main>
  )
}

export default Home

export const getServerSideProps = async () => {
  const featuredProductid = '6441b4a4553b95ed1815b096';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductid);
  const newProducts = await Product.find({}, null, {sort: {'_id': -1}, limit: 10});
  return {
    props: { 
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)) ,
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },

  }
}