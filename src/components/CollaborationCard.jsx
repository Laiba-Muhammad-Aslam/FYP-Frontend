import { ChevronRight } from 'lucide-react';


export default function CollaborationCard({ title, des, imgUrl }) {
  return (
    <div
      className={`relative bg-secondary lg:h-[448px] rounded-xl px-8 py-8 lg:py-10 lg:px-8 overflow-hidden`}
    >
      <div className="mb-8 flex flex-col justify-normal w-full lg:w-[300px] lg:h-full">
        <h3 className="text-2xl lg:text-4xl text-center lg:text-left font-bold mt-0 lg:mt-8 leading-none tracking-tight">
          {title}
        </h3>

        <p className="mt-4 text-md font-medium text-center lg:text-left text-muted-foreground leading-[140%] w-full lg:w-[240px]">
          {des}
        </p>

        <a className="mt-1 lg:mt-2 mx-auto lg:mx-0 group w-fit" href="#">
          {/* Anchor styled like a button (avoids nesting button inside link) */}
          <button
            className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg active:scale-95 duration-100 active:opacity-80 active:shadow-none hover:shadow-button h-9 group flex items-center text-card-foreground gap-1 w-fit bg-transparent hover:bg-transparent p-0 mt-1 lg:mt-2 mx-auto lg:mx-0"
          >
            <span className="font-semibold tracking-tight text-xs sm:text-sm group-hover:underline">
              Try now
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right group-hover:translate-x-1 translate-x-0 transition-transform size-4 sm:size-5"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </a>
      </div>

      <img
      alt={title}
        loading="lazy"
        width={580}
        height={347}
        decoding="async"
        className="shadow-bigDropshadow relative lg:absolute w-full lg:w-auto max-w-[400px] mx-auto lg:max-w-[580px] h-auto lg:max-h-[350px] lg:-right-8 translate-y-0 lg:translate-y-1/2 lg:bottom-1/2"
        style={{ color: "transparent" }}
        src={imgUrl}
      />
    </div>
  );
}
