import React from 'react'

export const metadata = {
  title:{
    absolute:"My Files",
  },

}
const File = async ({params}) => {
    console.log(await params);

    const {filePath} = await params;

  return (
    <div>File /{filePath?.join("/")}/</div>
  )
}

export default File