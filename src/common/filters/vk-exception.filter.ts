import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { VkArgumentsHost, VkException } from 'nestjs-vk';
import { Context } from 'vk-io';

@Catch()
export class VkExceptionFilter implements ExceptionFilter {
  async catch(exception: VkException, host: ArgumentsHost): Promise<void> {
    const vkContext = VkArgumentsHost.create(host);
    const ctx = vkContext.getContext<Context>();

    await ctx.send(`Error: ${exception.message}`);
  }
}
