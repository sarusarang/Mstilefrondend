import HeroBanner from "@/components/common/HeroBanner"
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";






export default function Contact() {



    const [checked, setChecked] = useState(false);



    return (



        <section className="w-full">


            <HeroBanner
                title="Contact Us"
                desc="We're here to help you with any questions or concerns you may have. Reach out to us and let us know how we can assist you."
                image="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?cs=srgb&dl=pexels-olly-789822.jpg&fm=jpg"
            />


            <BlurFade delay={0.25} duration={0.5} inView>

                <section className="w-full px-4 pt-2 sm:pt-8 pb-10 sm:pb-16 font-serif">


                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">


                        {/* Left - Form */}
                        <div>

                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                                Have a question?
                            </h2>

                            <p className="text-gray-600 mb-8 text-sm md:text-base">
                                Please do not fill out this form for any purpose other than
                                partnerships. We are not looking for any services at this time. We
                                cannot buy leads or calls.
                            </p>

                            <form className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium mb-1">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your First Name"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Last Name"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Message</label>
                                    <textarea
                                        placeholder="Write your message here"
                                        rows={4}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex items-start gap-2">
                                    <input
                                        id="confirm"
                                        type="checkbox"
                                        checked={checked}
                                        onChange={() => setChecked(!checked)}
                                        className="mt-1"
                                    />
                                    <label htmlFor="confirm" className="text-xs text-gray-600">
                                        I confirm that I am reaching out for a partnership and I am not
                                        soliciting any paid services. I understand that Applied Mind is
                                        not interested in buying leads and calls.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
                                >
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>

                        {/* Right - Contact Info */}
                        <div className="bg-blue-50 rounded-lg p-6 md:p-8">
                            <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
                            <p className="text-gray-600 mb-6 text-sm md:text-base">
                                We love to hear from you. Our friendly team is always here to chat.
                            </p>

                            <div className="space-y-5 text-gray-700">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <p className="font-medium">Address</p>
                                        <p className="text-sm">MS Tile Agencies
                                            Ramanattukara, near Chemillil Masjid, Kozhikode, Kerala 673633
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <p className="font-medium">Phone</p>
                                        <a href="tel:+919847603333" className="hover:text-blue-600" target="_blank">
                                            +91 98476 03333
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <a href="mailto:infomstiles@gmail.com" target="_blank">
                                            infomstiles@gmail.com
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </BlurFade>


        </section>

    )

}
