export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            reservations: {
                Row: {
                    id: string
                    name: string
                    phone: string
                    email: string | null
                    date: string
                    time: string
                    guests: number
                    message: string | null
                    status: string
                    created_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    phone: string
                    email?: string | null
                    date: string
                    time: string
                    guests: number
                    message?: string | null
                    status?: string
                    created_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    phone?: string
                    email?: string | null
                    date?: string
                    time?: string
                    guests?: number
                    message?: string | null
                    status?: string
                    created_at?: string
                }
            }
        }
    }
}
