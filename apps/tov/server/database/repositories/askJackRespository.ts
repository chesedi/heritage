import prisma from '~/server/database/client'
export async function createQuestion(data: IQuestionPost, authorId: number) {
  return await prisma.question.create({
    data: {
      authorId: authorId,
      title: data.title,
      description: data.description,
    },
  })
}
