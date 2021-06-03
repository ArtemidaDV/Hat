# Общая схема

```
|   ProfileManager
|         |
+---------+-----------------------------------------------------+
|  IOpenable                                                    |
|    |                                                          |
|    +--- Folder                    Wall --- Post               |
|    |                               |                          |
|    |      IMessage ------------ IProfile ---+                 |
|    |         |                              |                 |
|    +---------+--- PrivateChat               +--- Developer    |
|    |         |                              |                 |
|    +---------+--- PublicChat                +--- User         |
|    |         |                              |                 |
|    +---------+--- Channel                   +--- Bot          |
|                                                               |
+---------------------------------------------------------------+
```

# Описание элементов

*ProfileManager*  - бэкенд класс для регистрации пользователей, который авторизует юзеров и даёт доступ
```ruby
class ProfileManager:
  def google() -> User
  def github() -> Developer
  def bot(token) -> Bot```
```

*IOpenable*  - интерфейс с методом open()
```ruby
module IOpenable:
  def open() -> UI
```
*IMessage*  - интерфейс с методом write(IProfile, Map)
```ruby
module IMessage:
  def write(Map) -> boolean
  def open() -> UI
  messages: Array[Map]
  name: String
  users: IProfile
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
class PrivateChat < IMessage:
  user1: IProfile
  user2: IProfile
```
*PublicChat*  - беседа/комната
```ruby
class PublicChat < IMessage:
  users: Array[IProfile]
```
*Channel*  - канал (как в телеге)
```ruby
class Channel < IMessage:
  owner: IProfile
```

*IProfile*  - интерфейс профиля любого, кто может писать
```ruby
module IProfile:
  name: String
  pictureURL: String
  root: Folder
  channels: Array[Channel]
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
  ...
```
*Bot*  - бот
```ruby
class Bot:
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
