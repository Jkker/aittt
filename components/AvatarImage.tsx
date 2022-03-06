import Image from 'next/image'

function hash(str, seed = 0x811c9dc1) {
  /*jshint bitwise:false */
  let hval = seed

  for (let i = 0, l = str.length; i < l; i++) {
    hval ^= str.charCodeAt(i)
    hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24)
  }
  return hval >>> 0
}
const BG_COLORS = [
  'bg-red-400',
  'bg-orange-400',
  'bg-yellow-400',
  'bg-lime-400',
  'bg-green-400',
  'bg-teal-400',
  'bg-cyan-400',
  'bg-blue-400',
  'bg-indigo-400',
  'bg-purple-400',
  'bg-fuchsia-400',
  'bg-rose-400',
]

const getBgColor = (title: string) => BG_COLORS[Math.abs(hash(title)) % BG_COLORS.length]

const Avatar = ({ avatar, name, width = 96, height = 96, className = '' }) => (
  <span className="border-6 mb-4 rounded-full border-gray-100">
    {avatar ? (
      <Image
        src={avatar}
        height={height}
        width={width}
        alt={name + "'s avatar"}
        className={'flex-none rounded-full' + ' ' + className}
      />
    ) : (
      <span
        className={
          'flex-center h-24 w-24 flex-none rounded-full  text-4xl text-white' +
          ' ' +
          getBgColor(name) +
          ' ' +
          className
        }
      >
        {name.split(' ')?.[1]?.[0] ?? name[0]}
      </span>
    )}
  </span>
)

export default Avatar
