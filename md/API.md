# API POINTS



## ARTICLE

### Menampilkan article user
```
GET: /article
response:
[
  {
    "id"              : "",
    "title"           : "",
    "author"          : "",
    "pic      "       : "",
    "pic2"         : "",
    "markdown"        : "",
  },
  {
    ...
  }
]
```
### Menampilkan article user berdasarkan ```id```
```
GET: /article/[id]
response:
{
  "id"              : "",
  "title"           : "",
  "author"          : "",
  "pic      "       : "",
  "pic2"            : "",
  "markdown"        : "",
}
```
### Menambahkan article user
```
POST: /article
data:
{
  "id"              : "",
  "title"           : "",
  "author"          : "",
  "pic      "       : "",
  "pic2"            : "",
  "markdown"        : "",
}
response:
true    //if true
false   //if false
```
### Mengubah article user
```
PUT: /article
data:
{
  "id"              : "",
  "title"           : "",
  "author"          : "",
  "pic      "       : "",
  "pic2"            : "",
  "markdown"        : "",
}
response:
true    //if true
false   //if false
```
### Menghapus article user
```
DELETE: /article/[id]
response:
true    //if true
false   //if false
```
## ABOUT
### Menampilkan seluruh about
```
GET: /about
response:
[
  {
    "id"        : "",
    "sapaan"    : "",
    "deskripsi" : ""
  },
  {
    ...
  }
]
```
### Menampilkan about berdasarkan ```id```
```
GET: /about/[id]
response:
{
  "id"        : "",
  "sapaan"    : "",
  "deskripsi" : "",
}
```
### Menambahkan about
```
POST: /about
data:
{
  "id"        : "",
  "sapaan"    : "",
  "deskripsi" : "",
}
response:
true    //if true
false   //if false
```
### Mengubah about
```
PUT: /about
data:
{
  "id"        : "",
  "sapaan"    : "",
  "deskripsi" : "",
}
response:
true    //if true
false   //if false
```
### Menghapus about
```
DELETE: /about
response:
true    //if true
false   //if false
```

# DATABASE DESIGN
![Design Database](https://raw.githubusercontent.com/Filhafirahh/tekweb2022/main/md/Desain%20API.png)
