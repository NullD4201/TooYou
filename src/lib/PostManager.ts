import { BaseContext } from 'koa';
import { Post, User } from '@prisma/client';

export interface PostSearchOption {
    cut: number;
    page: number;
    category: number;
}

export interface PostData {
    authorUUID: string;
    title: string;
    imageLink: string;
    hyperLink: string;
    description: string;
    category: number;
}

export class PostManager {
    public static async getCategory(
        ctx: BaseContext
    ): Promise<Map<number, string>> {
        let res = new Map<number, string>();
        let category = await ctx.prisma.category.findMany();
        for (let c of category) res.set(c.id, c.name);
        return res;
    }

    public static async getPost(
        ctx: BaseContext,
        option: PostSearchOption
    ): Promise<(Post & { author: User })[]> {
        let posts: (Post & { author: User })[];
        if (option.category === 0) {
            posts = await ctx.prisma.post.findMany({
                skip: option.cut * (option.page - 1),
                take: option.cut,
                include: {
                    author: true,
                },
            });
        } else {
            console.log(option.category);
            posts = await ctx.prisma.post.findMany({
                where: {
                    category: option.category,
                },
                skip: option.cut * (option.page - 1),
                take: option.cut,
                include: {
                    author: true,
                },
            });
        }
        console.log(posts);
        return posts;
    }

    public static async createPost(
        ctx: BaseContext,
        data: PostData
    ): Promise<Post> {
        let post = await ctx.prisma.post.create({
            data: {
                author: {
                    connect: {
                        uuid: data.authorUUID,
                    },
                },
                title: data.title,
                imageLink: data.imageLink,
                hyperLink: data.hyperLink,
                description: data.description,
                category: data.category,
            },
        });
        return post;
    }
}

export default PostManager;
