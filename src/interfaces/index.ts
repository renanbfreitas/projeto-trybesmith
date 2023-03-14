export interface Product {
  id?: number
  name: string
  amount: string
  orederId?: number | null
}

export interface UserNotPassword {
  id?: number
  username: string
  vocation: string
  level: number
}
  
export interface User extends UserNotPassword {
  password: string
}
  
export interface JwtConfig {
  expiresIn: string
  algorithm: string
}

export interface Prod {
  id: number
  userId: number
  productsIds: number[]
}

export interface UserLogin {
  username: string
  password: string
}

export interface UserToken {
  id?: number
  username?: string
}