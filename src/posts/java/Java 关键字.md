---
title: Java 关键字
icon: fab fa-java
order: 1
category:
  - Java
tag:
  - Java
---

## `default` 关键字
`default` 关键字是 Java 8 中引入的一个新特性，它允许我们为接口中的方法提供一个默认实现。
如 Java HashMap 接口中的 putIfAbsent 方法就是通过 default 关键字来定义的

```java
public interface Map<K,V> {
    // ... 省略其他方法
    default V putIfAbsent(K key, V value) {
        V v = get(key);
        if (v == null) {
            v = put(key, value);
        }

        return v;
    }
    // ... 省略其他方法
}
```

default 关键字用于声明方法的访问权限。它位于接口和类中，其作用与 public 相似，但仅限于同一个包中的类可以访问该方法。

::: tip 访问权限修饰符

* public: 所有包中的类都可以访问。
* protected: 同一个包以及子类的所有类都可以访问。
* default(package-private): 同 一个包中的类可以访问。
* private: 仅限于该类自身访问。

:::
