// Gộp class names, bỏ qua các giá trị falsy
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}
