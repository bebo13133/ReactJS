function About (){
    return(
        <div className="container mx-auto tm-container py-24 sm:py-48">
        <div className="tm-item-container sm:ml-auto sm:mr-12 mx-auto sm:px-0 px-4">
          <div className="bg-white bg-opacity-80 p-12 pb-14 rounded-xl mb-5">
            <h2 className="mb-6 tm-text-green text-4xl font-medium">About our cafe</h2>
            <p className="mb-6 text-base leading-8">
              Images are taken from Pexels, a great stock photo website. This template used Tailwind CSS. You may modify Antique Cafe template in any way you prefer and use it for your website.
            </p>
            <p className="text-base leading-8">
              If you wish to <a rel="nofollow" href="https://www.tooplate.com/contact" target="_parent">support us</a>, please make a little donation via PayPal. That would be
              very helpful. Another way is to tell your friends about Tooplate website. Thank you. </p>
          </div>
          <a href="#contact" className="inline-block tm-bg-green transition text-white text-xl pt-3 pb-4 px-8 rounded-md">
            <i className="far fa-comments mr-4"></i>
            Contact
          </a>
        </div>
      </div>
    )
}
export default About