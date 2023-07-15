import Jobselect from "./jobselect";
import Serviceselect from "./serviceselect";

export default function Searchbar() {
  return (
    <div className="flex gap-10">
      <Jobselect />
      <Serviceselect />
      <button>Sök</button>
    </div>
  );
}
