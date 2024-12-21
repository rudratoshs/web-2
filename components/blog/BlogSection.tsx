import { motion } from 'framer-motion'
import { BlogGrid } from './BlogGrid'
import { blogPosts } from '@/lib/blog-data'

export function BlogSection() {
    return (
        <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center space-y-4 mb-16"
            >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Latest from the Blog
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground text-lg">
                    Stay up to date with the latest trends and technologies in software development
                </p>
            </motion.div>

            <BlogGrid posts={blogPosts} />
        </section>
    )
}