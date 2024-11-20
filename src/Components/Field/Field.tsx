import { FieldLayout } from "./FieldLayout"

interface FieldProps {
  field: string[];
  makeMove: (index: number) => void
}

export const Field: React.FC<FieldProps> = ( { field, makeMove }) => {

  return (
    <FieldLayout field={field} makeMove={makeMove}></FieldLayout>
  )
}