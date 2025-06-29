import { getUserOnboardingStatus } from '@/actions/user'
import { industries } from '@/data/industries'
import { redirect } from 'next/navigation';
import OnboardingForm from './_componets/onboarding-form';

 async function OnboardingPage() {

    const {isOnboarded} = await getUserOnboardingStatus();
    if(isOnboarded){
      redirect("/dashboard")
    }
  return (
    <main>
      <OnboardingForm industries={industries}/>
    </main>
  )
}

export default OnboardingPage
