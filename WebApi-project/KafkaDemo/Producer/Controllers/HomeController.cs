using MassTransit.KafkaIntegration;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Producer.Model.VideoDeletedEvent;

namespace Producer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private ITopicProducer<VedioDeletedEvent> topicProducer;

        public HomeController(ITopicProducer<VedioDeletedEvent> _topicProducer)
        {
            topicProducer = _topicProducer;
        }
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] string Title)
        {
            try
            {
                await topicProducer.Produce(new VedioDeletedEvent { Title = Title });

            }
            catch (Exception ex)
            {

            }
            return Ok(new { status = "success" });
        }
    }
}
