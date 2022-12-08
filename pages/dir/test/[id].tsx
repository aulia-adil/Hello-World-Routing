import Link from "next/link";
import {useRouter} from "next/router";
import tes from "../../api/tesData";

function DynamicRouting() {
    const router = useRouter()
    const { id } = router.query
    console.debug("name: " + id)
    const tes1: { about: string; id: string } | undefined = tes.find(value => value.id === id)
    return (
        <Link href={'/'}><h1>HALO {tes1?.about}</h1></Link>
    )
}

export default DynamicRouting