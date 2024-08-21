---
title: Java 之 Map
icon: fab fa-markdown
order: 2
category:
  - Java
tag:
  - Java
---


```markmap

# Map

- HashMap
  - 基于哈希表实现
  - 不保证元素顺序

- LinkedHashMap
  - 基于哈希表和链表实现
  - 保证元素有序

- TreeMap
  - 基于红黑树实现
  - 保证元素按键值自然排序

- Hashtable
  - 基于哈希表的同步实现
  - 性能相对较低
  - 线程安全

```

## HashMap

@startuml
interface Map
interface Cloneable
interface Serializable
abstract class AbstractMap
class HashMap
Map <|- AbstractMap
Map <|-- HashMap
Cloneable <|-- HashMap
AbstractMap <|-- HashMap
Serializable <|-- HashMap

@enduml


@startuml
class Map {
  +put(key, value)
  +get(key)
  +remove(key)
  +containsKey(key)
  +containsValue(value)
}

class HashMap extends Map {
  -table:Entry[]
  +resize()
  +hash(key)
}

class Entry {
  -key:Object
  -value:Object
  -next:Entry
}


@enduml