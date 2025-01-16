import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"

export const Footer = () => {
    
    let data = new Date().getFullYear()

  return (
    <>
    <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>
                    Blog Pessoal Sansão Dembué Vieira | Copyright: {data}
                </p>
            <p className='text-lg'>Acesse as minhas redes sociais</p>
            <div className='flex gap-2'>
                <LinkedinLogo size={48} weight='bold' />
                <InstagramLogo size={48} weight='bold' />
                <FacebookLogo size={48} weight='bold' />
            </div>
        </div>
    </div>
</>
  )
}
