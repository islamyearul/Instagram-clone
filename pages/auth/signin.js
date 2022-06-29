import {getProviders, signIn} from "next-auth/react"
import Header  from "../../components/Header"

export default function signin({providers}) {
  return (
    <div>
        <Header  />
        <div className="flex justify-center space-x-7 mt-20">    
            <img className="hidden object-cover rotate-6 md:inline-flex md:w-40" src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png" alt="logo" />
            <div  className="">
                {
                Object.values(providers).map((provider) =>(
                    <div key={provider.name} className=" flex flex-col items-center ">
                        <img src="https://fdn.gsmarena.com/imgroot/news/18/03/instagram-timeline-changes/-728/gsmarena_001.jpg" alt="logo" className="w-32 object-cover" />
                        <p className="text-sm italic my-10  text-center ">This app is created to learning purpose </p>
                        <button onClick={()=>{signIn(provider.id, { callbackUrl: '/' })}} className="bg-red-400 rounded-lg p-3 text-white  hover:bg-red-500">Sign in with {provider.name }</button>
                    </div>
                )            
                )
                }
            </div>
        </div>
      
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
//   const {provider} = context.query
//   const {signIn} = providers[provider]
//   const {user} = await signIn(context)
  return {
    props: {providers},
  }
}