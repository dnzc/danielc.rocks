import MyLink from './MyLink';

export default function Project({ 
  title, 
  authors, 
  subtitle, 
  links = [], 
  description, 
  image 
}) {
  return (
    <div className="flex items-center flex-col xs:flex-row pb-4 xs:pb-8 border-b xs:border-b-0 border-black">
      <div className="w-full xs:w-1/5 xs:pr-4 mb-2 xs:mb-0 mt-4 xs:mt-2 pb-4">
        {image ? (
          <img src={image} alt={title} className="w-full h-auto mx-auto xs:mx-0 max-w-[120px]" />
        ) : (
          <div className="w-full h-24 bg-gray-300 mx-auto xs:mx-0 max-w-[120px]"></div>
        )}
      </div>
      <div className="flex-1 text-center xs:text-left">
        <p className="text-lg">{title}</p>
        <p>{authors}</p>
        <p>{subtitle}</p>
        {links.length > 0 && (
          <p>
            {links.map((link, index) => (
              <span key={index}>
                {link.type === 'copy' ? (
                    <MyLink data={link.content} copy>{link.label}</MyLink>
                ) : (
                  <MyLink data={link.url}>{link.label}</MyLink>
                )}
                {index < links.length - 1 && " / "}
              </span>
            ))}
          </p>
        )}
        <p className="mt-3">
          {description}
        </p>
      </div>
    </div>
  );
}