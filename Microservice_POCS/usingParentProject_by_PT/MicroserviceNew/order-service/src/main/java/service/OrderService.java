package com.order.service.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.order.service.dto.OrderLineItemsDto;
import com.order.service.dto.OrderRequest;
import com.order.service.model.Order;
import com.order.service.model.OrderLineItems;
import com.order.service.repository.OrderRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderService {
	
	
	@Autowired
	private final OrderRepository orderRepository;
	
	public void placeOrder(OrderRequest orderRequest) {
		Order order=new Order();
		order.setOrderNumber(UUID.randomUUID().toString());
		
		List<OrderLineItems>orderLineItems=orderRequest.getOrderLineItemsDtoList()
		.stream().map(this::mapToDto).toList();
		
		order.setOrderLineItemsList(orderLineItems);
		
		orderRepository.save(order);
		
		
	}
		
		
	       private OrderLineItems mapToDto(OrderLineItemsDto orderLineItemsDto) {
			
			OrderLineItems orderLineItems=new OrderLineItems();
			orderLineItems.setPrice(orderLineItemsDto.getPrice());
			orderLineItems.setQuantity(orderLineItemsDto.getQuantity());
			orderLineItems.setSkuCode(orderLineItemsDto.getSkuCode());
			return orderLineItems;
		
		
	}

}
