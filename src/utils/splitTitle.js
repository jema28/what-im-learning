export const splitTitle = title => {
  const titleArr = title.split(' ')
  return {
    subtitle: titleArr.slice(0, -1).join(' '),
    title: titleArr[titleArr.length - 1]
  }
}
