import { getAllImages } from '@/lib/actions/images.action'

const Gallery = async () => {
    const designs = await getAllImages({limit: 6, page: 1});

  return (
    <section className="container py-10">
        <p className="flex items-center text-xl space-x-2 text-black mx-auto w-fit">
            <span className="w-14 h-[3px]" style={{ backgroundImage: `linear-gradient(to right, rgba(5, 13, 51, 0), rgba(5, 13, 51, .8))`}}>
            </span>
            <span className="font-semibold text-2xl">
            Gallery
            </span>
            <span className="w-14 h-[3px]" style={{ backgroundImage: `linear-gradient(to left, rgba(5, 13, 51, 0), rgba(5, 13, 51, .8))`}}></span>
        </p>
        <h2 className="text-6xl text-center my-6 font-bold">
            Recently created designs by our users
        </h2>

        <div className="py-10 grid grid-cols-8 gap-8">
            {
                designs?.data?.map((designs: {_id: string, image: string}) => (
                    <div key={designs._id} className="col-span-2 h-72 w-72 !bg-cover !bg-center rounded-xl" style={{ background: `url('${designs.image}')`}}>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Gallery