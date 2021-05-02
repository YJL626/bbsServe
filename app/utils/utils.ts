import { readdirSync } from 'fs'
import Router from 'koa-router'
import { resolve } from 'path'

const readDirModules = (path: string, ignoreArr: Array<RegExp>): any => {
  //筛选一下忽略的数组
  const fileArr = readdirSync(path).filter(
    (fileName) => ignoreArr.every((rule) => rule.test(fileName) === false)
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
const isRouter = (router: Router) => {
  return !!((router.routes as any) && router.get)
}

const isPlainObject = (object: object) => {
  return Object.getPrototypeOf(object) === Object.prototype
}

function checkObjectForm(model: object, data: object): Boolean {
  return Object.keys(model).every((property) => {
    //查询是否有嵌套
    if (typeof (model as any)[property] === 'object') {
      // 如果body和模型的数据类型不一致说明验证未通过
      if (typeof (data as any)[property] !== 'object') return false
      //递归的进行验证
      return checkObjectForm((model as any)[property], (data as any)[property])
    }
    return (data as object).hasOwnProperty(property)
  })
}

export { readDirModules, isRouter, checkObjectForm }
