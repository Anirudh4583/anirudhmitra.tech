import Image from './Image'
import Link from './Link'
import SocialIcon from './social-icons'

const Card = ({ title, description, imgSrc, href, blogLink, githubLink, liveLink }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (blogLink ? (
          <Link href={blogLink} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <div className="flex justify-between">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {blogLink ? (
              <Link href={blogLink} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <div className="flex gap-3">
            {githubLink && <SocialIcon kind="github" href={githubLink} size="6" />}
            {href && <SocialIcon kind="link" href={href} size="6" />}
          </div>
        </div>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {blogLink && (
          <Link
            href={blogLink}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Read more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
