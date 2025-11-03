---
title: PlantUML模版
date: 2024-08-28
order: 2
tags: 
    - PlantUML
    - 教程
---

::: tabs#flow
@tab 序列图#1

``` uml

@startuml
  Alice -> Bob: Authentication Request
  Bob --> Alice: Authentication Response
  
  Alice -> Bob: Another authentication Request
  Alice <-- Bob: Another authentication Response
@enduml

```

@startuml
  Alice -> Bob: Authentication Request
  Bob --> Alice: Authentication Response
  
  Alice -> Bob: Another authentication Request
  Alice <-- Bob: Another authentication Response
@enduml

@tab 用例图#2

```uml

@startuml
  :User: --> (Use)
  "Main Admin" as Admin
  "Use the application" as (Use)
  Admin --> (Admin the application)
@enduml

```

@startuml
  :User: --> (Use)
  "Main Admin" as Admin
  "Use the application" as (Use)
  Admin --> (Admin the application)
@enduml

@tab 类图#3

```uml

@startuml
  abstract        abstract
  abstract class  "abstract class"
  annotation      annotation
  circle          circle
  ()              circle_short_form
  class           class
  diamond         diamond
  <>              diamond_short_form
  entity          entity
  enum            enum
  interface       interface
  protocol        protocol
  struct          struct
@enduml

```

@startuml
  abstract        abstract
  abstract class  "abstract class"
  annotation      annotation
  circle          circle
  ()              circle_short_form
  class           class
  diamond         diamond
  <>              diamond_short_form
  entity          entity
  enum            enum
  interface       interface
  protocol        protocol
  struct          struct
@enduml

@tab 对象图#4

```uml
@startuml
  object Object01
  object Object02
  object Object03
  object Object04
  object Object05
  object Object06
  object Object07
  object Object08
  
  Object01 <|-- Object02
  Object03 *-- Object04
  Object05 o-- "4" Object06
  Object07 .. Object08 : some labels
@enduml

```

@startuml
  object Object01
  object Object02
  object Object03
  object Object04
  object Object05
  object Object06
  object Object07
  object Object08
  
  Object01 <|-- Object02
  Object03 *-- Object04
  Object05 o-- "4" Object06
  Object07 .. Object08 : some labels
@enduml

@tab 活动图#5

```uml

@startuml

start

if (Graphviz installed?) then (yes)
  :process all
diagrams;
else (no)
  :process only
  __sequence__ and __activity__ diagrams;
endif

stop

@enduml

```

@startuml

start

if (Graphviz installed?) then (yes)
  :process all
diagrams;
else (no)
  :process only
  __sequence__ and __activity__ diagrams;
endif

stop

@enduml

@tab 组件图#6

```uml
@startuml
  [First component]
  [Another component] as Comp2
  component Comp3
  component [Last component] as Comp4
@enduml
```

@startuml
  [First component]
  [Another component] as Comp2
  component Comp3
  component [Last component] as Comp4
@enduml

@tab 部署图#7

```uml
@startuml
  node node1
  node node2
  node node3
  node node4
  node node5
  node1 -- node2 : label1
  node1 .. node3 : label2
  node1 ~~ node4 : label3
  node1 == node5
@enduml
```

@startuml
  node node1
  node node2
  node node3
  node node4
  node node5
  node1 -- node2 : label1
  node1 .. node3 : label2
  node1 ~~ node4 : label3
  node1 == node5
@enduml

@tab 状态图#8

```uml
@startuml
  [*] --> State1
  State1 --> [*]
  State1 : this is a string
  State1 : this is another string
  State1 -> State2
  State2 --> [*]
@enduml
```

@startuml
  [*] --> State1
  State1 --> [*]
  State1 : this is a string
  State1 : this is another string
  State1 -> State2
  State2 --> [*]
@enduml

@tab 时序图#9

```uml
@startuml
  robust "Web Browser" as WB
  concise "Web User" as WU
  
  @0
  WU is Idle
  WB is Idle
  
  @100
  WU is Waiting
  WB is Processing
  
  @300
  WB is Waiting
@enduml
```

@startuml
  robust "Web Browser" as WB
  concise "Web User" as WU
  @0
  WU is Idle
  WB is Idle
  @100
  WU is Waiting
  WB is Processing
  @300
  WB is Waiting
@enduml

@tab 脑图#10

```uml
@startmindmap
* 一级
  * 二级
    * 三级
  * 二级
  * 二级


*[#Orange] Colors
**[#lightgreen] Green
**[#FFBBCC] Rose
**[#lightblue] Blue

<style>
mindmapDiagram {
  .green {
    BackgroundColor lightgreen
}
.rose {
    BackgroundColor #FFBBCC
  }
  .your_style_name {
    BackgroundColor lightblue
} }
</style>
* Colors
** Green <<green>>
** Rose <<rose>>
** Blue <<your_style_name>>

@endmindmap
```

@startmindmap

* 一级
  * 二级
    * 三级
  * 二级
  * 二级
*[#Orange] Colors
**[#lightgreen] Green
**[#FFBBCC] Rose
**[#lightblue] Blue

<style>
mindmapDiagram {
  .green {
    BackgroundColor lightgreen
}
.rose {
    BackgroundColor #FFBBCC
  }
  .your_style_name {
    BackgroundColor lightblue
} }
</style>
* Colors
** Green <<green>>
** Rose <<rose>>
** Blue <<your_style_name>>

@endmindmap

:::

## 活动图

::: tabs

@tab 开始/结束#1

```uml
@startuml
start
end
stop
@enduml
```

@startuml
start
note left
开始节点(start)
end note
end
note left
结束节点(end)
end note

stop
note left
结束节点(stop)
end note
@enduml

@tab 节点#2

```uml
@startuml
:节点;
@enduml
```

@startuml
:节点;
@enduml

@tab 条件#3

```uml
@startuml
start
if(条件1?) then(yes)
  :节点1;
elseif(条件2?) then(yes)
  :节点2;
else(no)
  :节点3;
endif
stop
@enduml
```

@startuml
start
if(条件1?) then(yes)
  :节点1;
elseif(条件2?) then(yes)
  :节点2;
else(no)
  :节点3;
endif
stop
@enduml

@tab 循环#4

```uml
@startuml
start
repeat
  :节点;
repeat while (more data?)
stop

start
repeat :节点1;
  :节点2;
backward:节点3;
repeat while (more data?)
stop
@enduml
```

@startuml
start
repeat
  :节点;
repeat while (more data?)
stop
start
repeat :节点1;
  :节点2;
backward:节点3;
repeat while (more data?)
stop
@enduml

@tab 备注#5

```uml
@startuml
:节点;
note left
左边备注
end note
note right
右边备注
end note
@enduml
```

@startuml
:节点;
note left
左边备注
end note
note right
右边备注
end note
@enduml
:::
