export default function HeroView({ id, name, race }) {
  return (
    <div className='hero__view'>
      {/*Hero Image*/}
      <div className='hero__view__image'>
        <span>Image should be here</span>
      </div>

      <div className='hero__view__data'>
        {/*Hero Race*/}
        <div className='hero__view__race'>
          <p className='hero__view__data__text'>Race: {race}</p>
        </div>

        {/*Hero Name*/}
        <div className='hero__view__name'>
          <p className='hero__view__data__text'>Name: {name}</p>
        </div>
      </div>
    </div>
  )
}
