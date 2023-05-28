import FiltersList from '@/components/FiltersList';
import Header from '@/components/Global/Header';
import PropertyList from '@/components/PropertyList';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Header />

      <FiltersList />

      <PropertyList />
    </main>
  );
}
