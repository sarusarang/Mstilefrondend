import { Outlet } from "react-router-dom"
import Header from "../common/Header"
import Footer from "../common/Footer"
import WhatsAppButton from "../common/WhatsAppButton"




export default function MainLayout() {


    return (

        <div className="flex flex-col min-h-screen">


            {/* Header */}
            <header>
                <Header />
            </header>


            {/* Main Content */}
            <main className="flex-1">
                <Outlet />
            </main>


            {/* Footer */}
            <footer>
                <Footer />
            </footer>


            {/* WhatsApp Chat */}
            <section aria-label="WhatsApp Chat">
                <WhatsAppButton />
            </section>


        </div>


    )

}
