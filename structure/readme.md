# Общая схема

```
|   ProfileManager
|         |
+---------+------------------------------------------------------------------------+
|  IOpenable                                                                       |
|    |                                                                             |
|    +--- Folder                    Wall ----------- Post          Code            |
|    |                               |                               |             |
|    |      IMessage ------------ IProfile -----------------+     Project          |
|    |         |                     |                      |        |             |
|    +---------+--- PrivateChat      +---- Album ---+       +--- Developer ---+    |
|    |         |                     |              |       |                 |    |
|    +---------+--- PublicChat    Directory       Audio     +--- User         |    |
|    |         |                     |                      |                 |    |
|    +---------+--- Channel         File                    +--- Bot ---------+    |
|                                                                                  |
+----------------------------------------------------------------------------------+
```

# Описание элементов

*ProfileManager*  - класс для регистрации пользователей, который авторизует юзеров и даёт доступ
```ruby
class ProfileManager:
  def google() -> User
  def github() -> Developer
  def bot(token) -> Bot
```

*IOpenable*  - интерфейс с методом open()
```ruby
module IOpenable:
  def open() -> UI
```
*IChat*  - интерфейс с методом write(IProfile, Map)
```ruby
module IChat:
  def write(Map) -> boolean
  messages: Array[Map]
  name: String
  pictureURL: String
```

*Folder*  - папка
```ruby
class Folder:
  include IOpenable
  def open() -> UI
  elements: Array[IOpenable]
  name: String
  pictureURL: String
```
*PrivateChat*  - личный чат
```ruby
class PrivateChat:
  include IOpenable
  include IChat
  user1: IProfile
  user2: IProfile
```
*PublicChat*  - беседа/комната
```ruby
class PublicChat:
  include IOpenable
  include IChat
  inviteLinks: Array[String]
  banned: Array[IProfile]
  users: Array[IProfile]
```
*Channel*  - канал (как в телеге)
```ruby
class Channel:
  include IOpenable
  include IChat
  owner: IProfile
  inviteLink: String
```

*IProfile*  - интерфейс профиля любого, кто может писать
```ruby
module IProfile:
  name: String
  pictureURL: String
  root: Folder
  usrroot: Directory
  channels: Array[Channel]
  wall: Wall
```

*User*  - пользователь
```ruby
class User:
  include IProfile
  ...
```
*Developer*  - разработчик
```ruby
class Developer:
  include IProfile
  bots: Array[Bot]
  organisations: Array[String]
  projects: Array[Project]
```
*Bot*  - бот
```ruby
class Bot:
  include IProfile
  def response(Map) -> Map
```

*Wall*  - (data-)класс
```ruby
class Wall:
  posts: Array[Post]
  owner: IProfile
```
*Post*  - (data-)класс
```ruby
class Post:
  date: Date
  wall: Wall
  data: Map
```

*IDescriptable* - класс файл/папка
```ryby
interface IDescriptable:
  name: String
```

*File* - класс для файлов
```ruby
class File:
  include IDescriptable
  link: String
```

*Directory* - класс для папок с файлами
```ruby
class Directory:
  include IDescriptable
  files: Array[IDescriptable]
```

*IMedia* - интерфейс медиа
```ruby
interface IMedia:
  link: Strinf
```

*Audio* - класс для аудиофайлов
```ruby
class Audio:
  include IMedia
  name: String
  author: String
```

*Picture* - (дата-)класс для изображений
```ruby
class Picture:
  include IMedia
```

*Album* - класс для альбомов
```ruby
class Album:
  owner: IProfile
  name: String
  preview: Picture
  data: Array[IMedia]
```

*Code* - класс для файлов с кодом
```ruby
class Code:
  data: String
  name: String
  location: String
```

*Project* - класс проекта
```ruby
class Project:
  code: Array[Code]
  owner: Developer
  devs: Array[Developer]
```
