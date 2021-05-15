```
{
"postList":[{
"tid":"1111",
"title":"标题",
"catalog":"index"
"created":"time stamp"
"isTop":"0",
"reply":"10"
"user":{
  "uid":"188",
  "name":"nickname",
  "avatar":"picture_src"
  }
},data,date]
}
```

post List中 `data`说明

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