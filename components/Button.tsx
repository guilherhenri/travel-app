import Image from 'next/image'

interface ButtonProps {
  type: 'button' | 'submit'
  title: string
  icon?: string
  variant: string
  full?: boolean
}

export function Button({ type, title, icon, variant, full }: ButtonProps) {
  return (
    <button
      className={`flexCenter cursor-pointer gap-3 rounded-full border ${variant} ${ full &&
        'w-full' }`}
      type={type}
    >
      {icon && <Image src={icon} alt="title" width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}
