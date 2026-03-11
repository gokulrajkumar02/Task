
const generateVariationId = (fileName : string) => {
 const generatedKey = fileName
      ?.toLowerCase()
      .replace(/\s+=/g, "-")
      .replace(/[^a-z0-9-]/g, "");
return generatedKey
}

export default generateVariationId
