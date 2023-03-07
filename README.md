## 隐私计算
### 隐私
- 密钥管理：为每个组织生成单独的密钥，并保证密钥的安全性。
- 数据隔离：确保各个组织的数据相互隔离，互不干扰。
- 访问控制：限制用户访问不属于自己所在组织的数据

#### 密钥管理
1. 管理的目的是管理身份
2. 通过ca那套东西来处理


#### 数据隔离
1. 加密数据隔离
2. 网络隔离


#### 访问控制
基于acl来控制隐私

- ACLs存储哪些主体（如用户或组）可以访问某个资源。一种常见的实现方式是为资源存储一个ACL，其中包含一个权限列表，表示哪些主体可以执行哪些操作。

```
policies:
    readers:
        type: Signature
        rule: "OR('Org1MSP.member','Org2MSP.member')"
    writers:
        type: Signature
        rule: "OR('Org1MSP.admin','Org2MSP.admin')"
    admins:
        type: Signature
        rule: "OR('Org1MSP.admin','Org2MSP.admin')"
```
分为以下权限
- reader
- transfer
- computer 


### 计算
任务分发
- 谁计算谁请求
- 如果把计算也分配出去呢？
- 计算存证

解密计算
- 解密
- 同态解密

## 计算模型
- 模型也当作一种数据，有隔离等功能
- 计算过程需要收集存证
- 计算对象需要定义