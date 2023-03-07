// import type { NextPage } from 'next';
// import { Content } from '../components/home/content';

// const Home: NextPage = () => {
//    return <Content />;
// };
// export default Home;

import { trpc } from 'utils/trpc';
export default function IndexPage() {
   const hello = trpc.hello.useQuery({ text: 'client' });
   
   if (!hello.data) {
      return <div>Loading...</div>;
   }
   return (
      <div>
         <p>{hello.data.greeting}</p>
      </div>
   );
}
