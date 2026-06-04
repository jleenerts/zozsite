import type { Metadata } from 'next';
import IndexClient from './components/IndexPage';
 
export const metadata: Metadata = {
  title: {
    absolute: `Welcome to Zoz's website`,
  },
  description: `The official site of Zoz (aka Jacob IRL). Enter if you like, or don't - I'm not a cop or a sign.`,
}

// moved page content to separate Component so we can serve metadata with the page
export default function HomePage() {
   return (
      <IndexClient />
   );
}