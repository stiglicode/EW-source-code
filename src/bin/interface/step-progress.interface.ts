interface StepProgressType {
    title: string[]
	progress: number[]
}
interface ProgressCallBack {
	progress: (callback: number[]) => void
}

export type {StepProgressType, ProgressCallBack};