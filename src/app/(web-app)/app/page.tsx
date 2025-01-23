import { initialProfile } from "../lib/initial-profile";

const HomePage = async () => {
  const profile = await initialProfile();
  return (
    <main>
      <section className='mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
        <code className='border border-border rounded px-8 py-4 text-sm text-muted-foreground bg-input my-10'>
          {`>> ${profile.name} is in the main frame!`}
        </code>
      </section>
    </main>
  );
};

export default HomePage;
