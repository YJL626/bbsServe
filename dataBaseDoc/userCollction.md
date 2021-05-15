#	data base collection config

## user collection

| 字段      | 类型   | 空   | 默认  | 注释                            |
| :-------- | :----- | :--- | ----- | ------------------------------- |
| uid       | string | 否   |       | db默认生成                      |
| email     | string | 否   |       | 注册邮箱                        |
| name      | string | 否   |       | 昵称                            |
| password  | string | 否   |       | 密码                            |
| created   | Date   | 否   | now() | 注册时间                        |
| updated   | Date   | 否   | now() | 更新时间                        |
| integrate | number | 否   | 0     | 用户积分                        |
| gender    | number | 否   |       | 0男 1 女                        |
| roles     | number | 否   |       | 0普通用户 1 管理员 2 超级管理员 |
| avatar    | string | 否   | 0     | 用户头像                        |
| moblile   | string | 否   | 0     | 手机号码                        |
| status    | number | 否   | 0     | 0正常 ,1禁言,2禁用              |
| signature | string | 是   |       | 个性签名                        |
| location  | string | 是   |       | 城市                            |


- 备注：db usertable



## post 发帖记录 collection

| 字段    | 类型   | 空    | 默认    |                        注释                        |
| :------ | :----- | :---- | ------- | :------------------------------------------------: |
| tid     | string | false |         |                       帖子id                       |
| uid     | string | false |         |                        uid                         |
| title   | string | false |         |                      文章标题                      |
| content | string | false |         |                      文章内容                      |
| created | date   |       | now()   |                      创建时间                      |
| catalog | string |       | discuss | index全部,advise 建议,discuss交流share分享news动态 |
| reads   | number |       | 0       |                       阅读量                       |
| reply   | =----- | false |         |                        回帖                        |
| is Top  | number |       | 0       |                 是否置顶 0 否 1是                  |
| topNum  | number |       |         |                      置顶排序                      |
| tags    | string | false |         |                     文章的标签                     |

 

## 签到记录

| 字段      | 类型   | 空    | 默认值 | 注释           |
| --------- | ------ | ----- | ------ | -------------- |
| uid       | string | false |        | 用户id         |
| created   | date   | false | now()  | 创建时间       |
| last_sign | date   | false | now()  | 上一次签到时间 |

