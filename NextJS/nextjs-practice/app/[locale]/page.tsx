import getDictionary from "../../helper/getDictionary";

const page = async({params}  : {params : {locale : string}}) => {

    const {locale} = await params;
    const dict = await getDictionary(locale)

  return (
    <div>
        <h1>{dict.title}</h1>
        <h1>{dict.about}</h1>
    </div>
  )
}

export default page
