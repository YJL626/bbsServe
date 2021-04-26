import { readdirSync } from 'fs'
import Router from 'koa-router'
import { resolve } from 'path'

const readDirModules = (
  path: string,
  ignoreArr: Array<string>
): any => {
  //筛选一下忽略的数组
  const fileArr = readdirSync(path).filter(
    (fileName) => !ignoreArr.includes(fileName)
  )
  //在try，catch内根据文件名去读取module，
  return fileArr.reduce((acc: Array<any>, fileName) => {
    try {
      //读取模块并推入数组'
      const module = Object.values(require(resolve(path, fileName)))
      acc.push(...module)
    } catch {
      console.log('读取模块时遇到意料之外的文件')
    }
    return acc
  }, [])
}
//查看有没有router实例的方法
const isRouter = (router: Router) =>
  !!((router.routes as any) && router.get)
export { readDirModules, isRouter }
