import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Client = {
  id: string
  name: string
  company: string
  email: string
  phone: string
  city: string
}

export type ProjectStatus = 'active' | 'paused' | 'done'

export type Project = {
  id: string
  name: string
  clientId: string
  status: ProjectStatus
  budget: number
  progress: number
  dueDate: string
}

export type TaskStatus = 'todo' | 'doing' | 'done'

export type Task = {
  id: string
  title: string
  projectId: string
  status: TaskStatus
  priority: 'low' | 'med' | 'high'
  dueDate: string
}

export type InvoiceStatus = 'paid' | 'pending' | 'overdue'

export type Invoice = {
  id: string
  number: string
  clientId: string
  projectId: string
  amount: number
  status: InvoiceStatus
  dueDate: string
}

export type Session = {
  name: string
  email: string
  org: string
}

type Store = {
  session: Session | null
  clients: Client[]
  projects: Project[]
  tasks: Task[]
  invoices: Invoice[]
  login: (payload: Session) => void
  logout: () => void
  addClient: (c: Omit<Client, 'id'>) => void
  addProject: (p: Omit<Project, 'id'>) => void
  addTask: (t: Omit<Task, 'id'>) => void
  updateTaskStatus: (id: string, status: TaskStatus) => void
  addInvoice: (i: Omit<Invoice, 'id'>) => void
  resetSample: () => void
}

const KEY = 'masar-platform-v1'

const sampleClients: Client[] = [
  {
    id: 'c1',
    name: 'ليان الحمادي',
    company: 'نور ديجيتال',
    email: 'layan@noordigital.ae',
    phone: '+971 50 123 4567',
    city: 'دبي',
  },
  {
    id: 'c2',
    name: 'فهد العتيبي',
    company: 'أفق العقارية',
    email: 'fahad@ofoq.sa',
    phone: '+966 55 987 6543',
    city: 'الرياض',
  },
  {
    id: 'c3',
    name: 'مريم الكعبي',
    company: 'واحة الصحة',
    email: 'mariam@oasis.health',
    phone: '+971 52 444 8899',
    city: 'أبوظبي',
  },
]

const sampleProjects: Project[] = [
  {
    id: 'p1',
    name: 'إعادة بناء متجر نور',
    clientId: 'c1',
    status: 'active',
    budget: 82000,
    progress: 68,
    dueDate: '2026-12-15',
  },
  {
    id: 'p2',
    name: 'منصة حجوزات أفق',
    clientId: 'c2',
    status: 'active',
    budget: 145000,
    progress: 42,
    dueDate: '2027-01-20',
  },
  {
    id: 'p3',
    name: 'تطبيق متابعة المرضى',
    clientId: 'c3',
    status: 'paused',
    budget: 96000,
    progress: 25,
    dueDate: '2027-02-10',
  },
  {
    id: 'p4',
    name: 'هوية بصرية نور',
    clientId: 'c1',
    status: 'done',
    budget: 28000,
    progress: 100,
    dueDate: '2026-10-01',
  },
]

const sampleTasks: Task[] = [
  {
    id: 't1',
    title: 'تصميم صفحة الدفع',
    projectId: 'p1',
    status: 'doing',
    priority: 'high',
    dueDate: '2026-11-25',
  },
  {
    id: 't2',
    title: 'ربط بوابة الدفع',
    projectId: 'p1',
    status: 'todo',
    priority: 'high',
    dueDate: '2026-11-28',
  },
  {
    id: 't3',
    title: 'نموذج وحدة العقار',
    projectId: 'p2',
    status: 'doing',
    priority: 'med',
    dueDate: '2026-11-30',
  },
  {
    id: 't4',
    title: 'اختبارات قبول العميل',
    projectId: 'p2',
    status: 'todo',
    priority: 'med',
    dueDate: '2026-12-05',
  },
  {
    id: 't5',
    title: 'مراجعة صلاحيات التطبيق',
    projectId: 'p3',
    status: 'todo',
    priority: 'low',
    dueDate: '2026-12-12',
  },
  {
    id: 't6',
    title: 'تسليم ملفات الهوية',
    projectId: 'p4',
    status: 'done',
    priority: 'med',
    dueDate: '2026-09-28',
  },
]

const sampleInvoices: Invoice[] = [
  {
    id: 'i1',
    number: 'INV-1042',
    clientId: 'c1',
    projectId: 'p1',
    amount: 24000,
    status: 'paid',
    dueDate: '2026-10-15',
  },
  {
    id: 'i2',
    number: 'INV-1048',
    clientId: 'c2',
    projectId: 'p2',
    amount: 38000,
    status: 'pending',
    dueDate: '2026-11-30',
  },
  {
    id: 'i3',
    number: 'INV-1051',
    clientId: 'c3',
    projectId: 'p3',
    amount: 18000,
    status: 'overdue',
    dueDate: '2026-11-05',
  },
  {
    id: 'i4',
    number: 'INV-1039',
    clientId: 'c1',
    projectId: 'p4',
    amount: 28000,
    status: 'paid',
    dueDate: '2026-09-20',
  },
]

function uid(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`
}

function sampleState() {
  return {
    clients: sampleClients,
    projects: sampleProjects,
    tasks: sampleTasks,
    invoices: sampleInvoices,
  }
}

type Persisted = {
  session: Session | null
  clients: Client[]
  projects: Project[]
  tasks: Task[]
  invoices: Invoice[]
}

const StoreContext = createContext<Store | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Persisted>(() => {
    try {
      const raw = localStorage.getItem(KEY)
      if (raw) return JSON.parse(raw) as Persisted
    } catch {
      /* ignore */
    }
    return { session: null, ...sampleState() }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state))
  }, [state])

  const api = useMemo<Store>(
    () => ({
      ...state,
      login: (session) => setState((s) => ({ ...s, session })),
      logout: () => setState((s) => ({ ...s, session: null })),
      addClient: (c) =>
        setState((s) => ({ ...s, clients: [{ ...c, id: uid('c') }, ...s.clients] })),
      addProject: (p) =>
        setState((s) => ({ ...s, projects: [{ ...p, id: uid('p') }, ...s.projects] })),
      addTask: (t) =>
        setState((s) => ({ ...s, tasks: [{ ...t, id: uid('t') }, ...s.tasks] })),
      updateTaskStatus: (id, status) =>
        setState((s) => ({
          ...s,
          tasks: s.tasks.map((t) => (t.id === id ? { ...t, status } : t)),
        })),
      addInvoice: (i) =>
        setState((s) => ({ ...s, invoices: [{ ...i, id: uid('i') }, ...s.invoices] })),
      resetSample: () =>
        setState((s) => ({
          session: s.session,
          ...sampleState(),
        })),
    }),
    [state],
  )

  return <StoreContext.Provider value={api}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}

export function money(n: number) {
  return new Intl.NumberFormat('ar-AE', {
    style: 'currency',
    currency: 'AED',
    maximumFractionDigits: 0,
  }).format(n)
}

export function clientName(clients: Client[], id: string) {
  return clients.find((c) => c.id === id)?.company ?? '—'
}

export function projectName(projects: Project[], id: string) {
  return projects.find((p) => p.id === id)?.name ?? '—'
}
